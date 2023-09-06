import image_gen
import shutil
scale=1
frame=0
for i in range(0,300,1):
    name="temp"+str(frame)+".png"
    image_gen.main([300,-200],scale,name)
    source="./"+name
    destination="./animate/"+name
    shutil.move(source, destination)
    scale+=2
    frame+=1