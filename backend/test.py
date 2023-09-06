import numpy as np
import matplotlib.pyplot as plt
import sympy as sp
import scipy.integrate as sy
import csv,pandas
a=np.array([[1,2,3],[3,1,2],[5,3,6]]);
filename="record.csv"
with open(filename,'w') as file:
  csvwriter=csv.writer(file)
  csvwriter.writerow(a)
data=np.array(pandas.read_csv(filename,header=None))
print(data)