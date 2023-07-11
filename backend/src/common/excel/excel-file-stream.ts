// // ** Module
// import * as XLSX from 'xlsx'

// // ** Util
// import { getUploadExcelPath } from 'src/common/util'

// export const exportToExcel = async (name: string, data: any) => {
//   try {
//     // 新しいワークブックを作成
//     const wb = XLSX.utils.book_new()

//     // データをシートに変換
//     const ws = XLSX.utils.json_to_sheet(data)

//     // ワークブックにシートを追加
//     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')

//     // ファイルに書き込み
//     await XLSX.writeFile(wb, `${getUploadExcelPath()}${name}.xlsx`)
//   } catch (err) {
//     console.log(err)
//     return false
//   }
//   return true
// }
