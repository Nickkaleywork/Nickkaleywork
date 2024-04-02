f = open("array.js", "r")
state = []
lines = f.readlines()

#User Input
print("Enter Line:")
Line = input()


#set all stations to one color
if Line == "all":
    print("Enter color:")
    color = input()

    if color == "FF1AE5":
        color = "rgb(253 1 0)"
    elif color == "FF9A65":
        color = "rgb(0 128 0)"
    elif color == "FF9A65":
        color = "rgb(0 113 192)"
    elif color == "FFB24D":
        color = "rgb(112 48 160)"

    num = 0
    for x in lines:
        num = num+1
        state.append(str(x).strip())

    string = str(color)
    Uinput = 'state:"'+string+'"'

    for x in range(1,6):
        for y in range(1,10):
            index = state.index('line:"'+str(x)+'",station:"'+str(y)+'",')
            state[index+1] = Uinput
            with open (r'array.js','w') as file:
                for z in state:
                    file.write(str(z)+'\n')
                print("write")

#set individual station colors
else:
    print("Enter Station:")
    Station = input()
    print("Enter color:")
    color = input()

    if color == "FF1AE5":
        color = "rgb(253 1 0)"
    elif color == "FF9A65":
        color = "rgb(0 128 0)"
    elif color == "FFA25D":
        color = "rgb(0 113 192)"
    elif color == "FFB24D":
        color = "rgb(112 48 160)"


    string = str(color)
    Uinput = 'state:"'+string+'"'
    print(Uinput)
    num = 0
    for x in lines:
        num = num+1
        state.append(str(x).strip())

    index = state.index('line:"'+Line+'",station:"'+Station+'",')

    state[index+1] = Uinput

    with open (r'array.js','w') as file:
        for x in state:
            #print(x)
            file.write(str(x)+'\n')
        print("write")
