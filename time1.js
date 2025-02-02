#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();

if (argv.y) {
  console.log(`текущий год: ${year}`);
}

if (argv.m) {
  console.log(`текущий месяц: ${month}`);
}

if (argv.d) {
  console.log(`текущий день: ${day}`);
}

if (argv.h) {
  console.log(`текущий час: ${hour}`);
}
if (argv.n) {
  console.log(`текущая минута: ${min}`);
}

if (argv.s) {
  console.log(`текущая секунда: ${sec}`);
}

if (argv.t) {
  console.log(`полное текущее время : ${date}`);
}

if (!argv.y && !argv.m && !argv.d && !argv.h && !argv.n && !argv.s && !argv.t) {
  console.log('');
  console.log('*******************************************');
  console.log('                  ПОМОЩЬ               ');
  console.log('*******************************************');
  console.log('');
  console.log('current -y : вывод текущего года');
  console.log('current -m : вывод текущего месяца');
  console.log('current -d : вывод текущего дня');
  console.log('current -h : вывод текущего часа');
  console.log('current -n : вывод текущей минуты');
  console.log('current -s : вывод текущей секунды');
  console.log('current -t : вывод полного текущего времени');
  console.log('');
  console.log('*******************************************');
}
