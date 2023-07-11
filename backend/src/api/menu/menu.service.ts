import { HttpStatus } from '@nestjs/common'
// ** Module
import { Inject, Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'
import moment from 'moment'

// ** Dto
import { DeleteMenuDto } from './dto/delete-menu.dto'
import { UpdateMenuDto } from './dto/update-menu.dto copy'
import { CreateMenuDto } from './dto/create-menu.dto'
import { GetMenuOrderListDto } from './dto/get-menu-order-list.dto'

// ** Entity
import { Menu } from 'src/entities/menu.entity'
import { MenuOrder } from 'src/entities/menu-order.entity'

// ** Constant
import DATE from 'src/common/constants/date'
import { handleError } from 'src/common/util'

@Injectable()
export class MenuService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource
  ) {}

  // ANCHOR get menu list
  async getMenuList() {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      // data
      const data = await queryRunner.manager
        .getRepository(Menu)
        .createQueryBuilder('m')
        .select([
          'm.id as id',
          'm.type as type',
          'm.title as title',
          'm.icon as icon',
          'm.path as path',
          'm.created_at as createdAt',
          'm.updated_at as updatedAt'
        ])
        .where('1=1')
        .andWhere('m.deleted_at is null')
        .orderBy('m.created_at', 'DESC')
        .getRawMany()

      return {
        statusCode: HttpStatus.OK,
        message: '',
        data: data
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }

  // ANCHOR get menu
  async getMenu(role: string) {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      // data
      const data = await queryRunner.manager
        .getRepository(Menu)
        .createQueryBuilder('m')
        .select([
          'm.id as id',
          'm.type as type',
          'm.title as title',
          'm.icon as icon',
          'm.route as route',
          'mo.permission as permission',
          'mo.menu_order as menuOrder',
          'm.path as path',
          'm.created_at as createdAt',
          'm.updated_at as updatedAt'
        ])
        .leftJoin(MenuOrder, 'mo', 'm.id = mo.menu_id')
        .where('1=1')
        .andWhere('mo.permission = :role', { role })
        .andWhere('m.deleted_at is null')
        .orderBy('mo.menu_order', 'ASC')
        .getRawMany()

      return {
        statusCode: HttpStatus.OK,
        message: '',
        data: data
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }

  // ANCHOR get menu list
  async getMenuOrderList(dto: GetMenuOrderListDto) {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      // data
      const menuOrderList = await queryRunner.manager
        .getRepository(MenuOrder)
        .find({
          where: {
            permission: dto.permission
          },
          order: {
            menuOrder: 'ASC'
          }
        })

      return {
        statusCode: HttpStatus.OK,
        message: '',
        data: menuOrderList
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }

  // ANCHOR create menu
  async createMenu(dto: CreateMenuDto) {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      const menu = new Menu()
      menu.type = dto.type
      menu.title = dto.title
      menu.icon = dto.icon
      menu.path = dto.path
      menu.route = dto.route

      await queryRunner.manager.getRepository(Menu).save(menu)

      await queryRunner.commitTransaction()

      return {
        statusCode: HttpStatus.OK,
        message: '',
        data: null
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }

  // ANCHOR update menu
  async updateMenu(dto: UpdateMenuDto) {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      await queryRunner.manager
        .getRepository(MenuOrder)
        .createQueryBuilder('mo')
        .delete()
        .where('permission = :permission', { permission: dto.permission })
        .execute()

      for (let i = 0; i < dto.menuIdList.length; i++) {
        const menuOrder = new MenuOrder()
        menuOrder.menuId = dto.menuIdList[i]
        menuOrder.permission = dto.permission
        menuOrder.menuOrder = i + 1

        await queryRunner.manager.getRepository(MenuOrder).save(menuOrder)
      }

      await queryRunner.commitTransaction()

      return {
        statusCode: HttpStatus.OK,
        message: '',
        data: null
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }

  // ANCHOR update menu
  async deleteMenu(dto: DeleteMenuDto) {
    const queryRunner = this.datasource.createQueryRunner()
    await queryRunner.startTransaction()
    try {
      // data
      const menuList = await queryRunner.manager.getRepository(Menu).findOne({
        where: {
          id: dto.id
        }
      })

      menuList.deletedAt = moment().format(DATE.DATETIME)

      await queryRunner.manager.getRepository(Menu).save(menuList)

      await queryRunner.commitTransaction()

      return {
        statusCode: HttpStatus.OK,
        message: '',
        data: null
      }
    } catch (error) {
      handleError(queryRunner, error)
    } finally {
      await queryRunner.release()
    }
  }
}
