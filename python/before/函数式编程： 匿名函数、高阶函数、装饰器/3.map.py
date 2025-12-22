list_x = [1, 2, 3]


def square(x):
    return x * x


# for x in list_x:
#     square(x)


r = map(square, list_x)
print(list(r))  # [1, 4, 9]
