// ** Module
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Put,
  Query,
  Res,
  Session,
  UseGuards
} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'

// ** Dto
import { DeleteMenuDto } from './dto/delete-menu.dto'
import { UpdateMenuDto } from './dto/update-menu.dto copy'
import { CreateMenuDto } from './dto/create-menu.dto'
import { GetMenuOrderListDto } from './dto/get-menu-order-list.dto'

// ** Service
import { MenuService } from './menu.service'

// ** Guard
import { SystemAdminGuard } from 'src/common/guard/system-admin.guard'

// ANCHOR builder controller
@ApiTags('menu')
@Controller('api/menu')
export class MenuController {
  constructor(private menuService: MenuService) {}

  // ANCHOR get menu
  @Get('getMenu')
  @ApiOperation({ summary: '메뉴 조회' })
  async getMenu(@Res() res: Response, @Session() session: any) {
    const role = session.role
    const result = await this.menuService.getMenu(role)
    res.status(result.statusCode).json(result)
  }

  // ANCHOR get menu list
  @UseGuards(SystemAdminGuard)
  @Get('getMenuList')
  @ApiOperation({ summary: '메뉴 목록 조회 (시스템 관리자 기능)' })
  async getMenuList(@Res() res: Response) {
    const result = await this.menuService.getMenuList()
    res.status(result.statusCode).json(result)
  }

  // ANCHOR get menu order list
  @UseGuards(SystemAdminGuard)
  @Get('getMenuOrderList')
  @ApiOperation({ summary: '메뉴 목록 조회 (시스템 관리자 기능)' })
  async getMenuOrderList(
    @Res() res: Response,
    @Query() dto: GetMenuOrderListDto
  ) {
    const result = await this.menuService.getMenuOrderList(dto)
    res.status(result.statusCode).json(result)
  }

  // ANCHOR create menu
  @UseGuards(SystemAdminGuard)
  @Post('createMenu')
  @ApiOperation({ summary: '메뉴 생성 (시스템 관리자 기능)' })
  async createMenu(@Res() res: Response, @Body() dto: CreateMenuDto) {
    const result = await this.menuService.createMenu(dto)
    res.status(result.statusCode).json(result)
  }

  // ANCHOR update Menu
  @UseGuards(SystemAdminGuard)
  @Put('updateMenu')
  @ApiOperation({ summary: '메뉴 수정 (시스템 관리자 기능)' })
  async updateMenu(@Res() res: Response, @Body() dto: UpdateMenuDto) {
    const result = await this.menuService.updateMenu(dto)
    res.status(result.statusCode).json(result)
  }

  // ANCHOR delete Menu
  @UseGuards(SystemAdminGuard)
  @Delete('deleteMenu')
  @ApiOperation({ summary: '메뉴 삭제 (시스템 관리자 기능)' })
  async deleteMenu(@Res() res: Response, @Query() dto: DeleteMenuDto) {
    const result = await this.menuService.deleteMenu(dto)
    res.status(result.statusCode).json(result)
  }
}
