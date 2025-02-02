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
  console.log('add -y z : вывод времени через z лет');
  console.log('add -m z : вывод времени через z месяцев');
  console.log('add -d z: вывод времени через z дней');
  console.log('add -h z: вывод времени через z часов');
  console.log('add -n z: вывод времени через z минут');
  console.log('add -s z: вывод времени через z секунд');
  console.log('');
  console.log('*******************************************');
}

if (argv.m) {
  const new_date = new Date(year, month + argv.m, day, hour, min, sec, 0);
  console.log(
    `Через количество месяцев ${argv.m} будет: ${new_date.toString()}`
  );
}

if (argv.y) {
  const new_date = new Date(year + argv.y, month, day, hour, min, sec, 0);
  console.log(`Через количество лет ${argv.y} будет: ${new_date.toString()}`);
}

if (argv.d) {
  const new_date = new Date(year, month, day + argv.d, hour, min, sec, 0);
  console.log(`Через количество дней ${argv.d} будет: ${new_date.toString()}`);
}

if (argv.h) {
  const new_date = new Date(year, month, day, hour + argv.h, min, sec, 0);
  console.log(`Через количество часов ${argv.h} будет: ${new_date.toString()}`);
}

if (argv.n) {
  const new_date = new Date(year, month, day, hour, min + argv.n, sec, 0);
  console.log(`Через количество минут ${argv.n} будет: ${new_date.toString()}`);
}

if (argv.s) {
  const new_date = new Date(year, month, day, hour, min, sec + argv.s, 0);
  console.log(
    `Через количество секунд ${argv.s} будет: ${new_date.toString()}`
  );
}

if (!argv.y && !argv.m && !argv.d && !argv.h && !argv.n && !argv.s) {
  showHelp();
}
