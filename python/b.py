number  = int(input("สูตรคูณแม่  = "))
lenght = int(input("จำนวน = "))
render = number
i = 1
print("\nสูตรคูณแม่ ", render)
while i <= lenght:
    result = number * i
    print(number , "X", i , "=" ,result)
    i +=1
    