interface objType {
  name: string,
  age: number,
}

function looping(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

looping([1, 2, 3, 4, 5]);

const embObj: objType[] = [
  { name: "Anshu", age: 21 },
  { name: "Abhishek", age: 18 }
]

function looping2(embObj: objType[]) {
  for (let i = 0; i < embObj.length; i++) {
    console.log(embObj[i].name);
  }
}

looping2(embObj);

// const express = require("express");
// import express from "express";
// import { add } from "math/lib";
