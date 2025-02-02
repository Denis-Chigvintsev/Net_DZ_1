#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { boolean } = require('yargs');

const argv = yargs(hideBin(process.argv)).argv;

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();

function showHelp() {
  console.log('');
  console.log('*******************************************');
  console.log('                  ПОМОЩЬ               ');
  console.log('*******************************************');
  console.log('');
  console.log('sub -y z : вывод времени z лет назад');
  console.log('sub -m z : вывод времени z месяцев назад');
  console.log('sub -d z: вывод времени z дней назад');
  console.log('sub -h z: вывод времени z часов назад');
  console.log('sub -n z: вывод времени z минут назад');
  console.log('sub -s z: вывод времени z секунд назад');
  console.log('');
  console.log('*******************************************');
}

if (argv.m) {
  const new_date = new Date(year, month - argv.m, day, hour, min, sec, 0);
  console.log(` ${argv.m} месяцев назад было: ${new_date.toString()}`);
}

if (argv.y) {
  const new_date = new Date(year - argv.y, month, day, hour, min, sec, 0);
  console.log(`${argv.y} лет назад было: ${new_date.toString()}`);
}

if (argv.d) {
  const new_date = new Date(year, month, day - argv.d, hour, min, sec, 0);
  console.log(`${argv.d} дней назад было: ${new_date.toString()}`);
}

if (argv.h) {
  const new_date = new Date(year, month, day, hour - argv.h, min, sec, 0);
  console.log(`${argv.h} часов назад было: ${new_date.toString()}`);
}

if (argv.n) {
  const new_date = new Date(year, month, day, hour, min - argv.n, sec, 0);
  console.log(`${argv.n} минут назад было: ${new_date.toString()}`);
}

if (argv.s) {
  const new_date = new Date(year, month, day, hour, min, sec - argv.s, 0);
  console.log(`${argv.s} секунд назад было: ${new_date.toString()}`);
}

if (!argv.y && !argv.m && !argv.d && !argv.h && !argv.n && !argv.s) {
  showHelp();
}
