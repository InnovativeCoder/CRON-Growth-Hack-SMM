import pandas as pd

data = pd.read_csv("./Number.csv")
newList = []
for i in range(0, data.size):
    if(data.iloc[i, 0].startswith("+91")):
        newList.append(data.iloc[i, 0])
with open('sanitized_no.txt', 'w') as f:
    for item in newList:
        f.write("%s\n" % item)
