#include <stdio.h>
#include <limits.h>

int main() {
  // 浮点型 单精度（+-10^-37 ~ 10^37），双精度
  float a_float = 3.14f; // 精度6, 7~8 +-10^-37 ~ 10^37
  printf("size of float: %d\n", sizeof(float));
  double a_double = 3.14; // 精度15~16
  printf("size of double: %d\n", sizeof(double));

  float lat = 39.90815f;
  printf("%f", 39.908156f - lat);

  float money = 3.14f; // error, never use float or double to describe money
  return 0;
}
