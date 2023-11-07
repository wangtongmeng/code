// 封装一个数据读取的模块
const fs = require('fs')
const express = require('express')
const { promisify } = require('util')
const readFile = promisify(fs.readFile) // 把回调式api转成promise式api
const writeFile = promisify(fs.writeFile)

exports.getDb = async () => {
  let data = await readFile('./db.json', 'utf8')
  return JSON.parse(data)
}

exports.serveDb = async (data) => {
  let stringData = JSON.stringify(data)
  return await writeFile('./db.json', stringData)
}