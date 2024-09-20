#include <cstdio>
#include <iostream>
#include <cstring>

using namespace std;

int main()
{
    
//  memset 单位是 byte
//  1byte = 8 bit
// 1KB = 1024 Byte
// 1MB = 1024KB
// 1KB = 1024MB
// 网络带宽 1Mb = 1/8MB = 128KB
// int 32bit = 4Byte
  // int a[10], b[10];
  // // memset(a, 0, 40); //第一个参数是数组，第二个参数是初始化的数值，第三个参数是多少个Byte，10int=40Byte所以是40
  // memset(a, 0, sizeof a); // 求 a 占的字节数量
  // // 由于是给Byte赋值，所以一般只会赋值0或者-1，一个整数int=4Byte，00000000 00000000 00000000 00000000
  // for (int i = 0; i < 10; i ++) cout << a[i] << ' ';
  

  // memcpy
  int a[10], b[10];

  for (int i = 0; i < 10; i ++ ) a[i] = i;
  memcpy(b, a,sizeof a);

  for (int i = 0; i < 10; i ++ ) cout << b[i] << ' ';
  

  return 0;
}