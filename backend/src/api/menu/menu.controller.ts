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
  @ApiOperation({
    summary: '메뉴 조회',
    description: '세션을 조회하여 권한에 맞는 메뉴 목록을 조회합니다.'
  })
  async getMenu(@Res() res: Response, @Session() session: any) {
    // get menu
    const data = await this.menuService.getMenu(session.role)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }

  // ANCHOR get menu list
  @UseGuards(SystemAdminGuard)
  @Get('getMenuList')
  @ApiOperation({
    summary: '메뉴 목록 조회 (시스템 관리자 기능)',
    description: '메뉴 목록을 조회합니다.'
  })
  async getMenuList(@Res() res: Response, @Session() session: any) {
    // get menu list
    const data = await this.menuService.getMenuList()

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }

  // ANCHOR get menu order list
  @UseGuards(SystemAdminGuard)
  @Get('getMenuOrderList')
  @ApiOperation({
    summary: '메뉴 목록 조회 (시스템 관리자 기능)',
    description: '메뉴 목록을 조회합니다.'
  })
  async getMenuOrderList(
    @Res() res: Response,
    @Session() session: any,
    @Query() dto: GetMenuOrderListDto
  ) {
    // get order menu list
    const data = await this.menuService.getMenuOrderList(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }

  // ANCHOR create menu
  @UseGuards(SystemAdminGuard)
  @Post('createMenu')
  @ApiOperation({
    summary: '메뉴 생성 (시스템 관리자 기능)',
    description: '메뉴를 생성합니다.'
  })
  async createMenu(
    @Res() res: Response,
    @Session() session: any,
    @Body() dto: CreateMenuDto
  ) {
    // create menu
    const data = await this.menuService.createMenu(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }

  // ANCHOR update Menu
  @UseGuards(SystemAdminGuard)
  @Put('updateMenu')
  @ApiOperation({
    summary: '메뉴 갱신 (시스템 관리자 기능)',
    description: '메뉴를 갱신합니다.'
  })
  async updateMenu(
    @Res() res: Response,
    @Session() session: any,
    @Body() dto: UpdateMenuDto
  ) {
    // update Menu
    const data = await this.menuService.updateMenu(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '성공적으로 메뉴가 갱신되었습니다.',
      data
    })
  }

  // ANCHOR delete Menu
  @UseGuards(SystemAdminGuard)
  @Delete('deleteMenu')
  @ApiOperation({
    summary: '메뉴 삭제 (시스템 관리자 기능)',
    description: '메뉴를 삭제합니다.'
  })
  async deleteMenu(
    @Res() res: Response,
    @Session() session: any,
    @Query() dto: DeleteMenuDto
  ) {
    // delete Menu
    const data = await this.menuService.deleteMenu(dto)

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '성공적으로 메뉴가 삭제되었습니다.',
      data
    })
  }
}
