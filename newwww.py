# lst=["a","bc","abc","de","xyz"]
# lst1=[]
# i=0
# while i<len(lst):
#    j=0
#    while j<len(lst[i]):
#        if lst[i]>lst[j]:
#            lst1.append(lst[i])
#         j=j+1
#     i=i+1
# print(lst1)
      

lst=["a","bc","abc","de","xyz"]
i=0
max=0
list=[]
mul=1
while i<len(lst):
    count=0
    j=0
    while j<len(lst[i]):
        count+=1
        if count>max:
            max=count
        j+=1
    list.append(count)
    i+=1
for k in list:
    if max==list[k]:
        mul=mul*list[k]
print(mul)
        