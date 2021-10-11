#!/usr/bin/python3
import cgi
import json
import subprocess

print("content-type: text/html")
print()

f = cgi.FieldStorage()
img = f.getvalue('i')
cname = f.getvalue('n')
cmd = "sudo docker run -itd --name {} {}".format(cname,img)
op = subprocess.getoutput(cmd)
keys=["cmd","op"]
values=[cmd,op]
op1={keys[i]:values[i] for i in range(len(keys))}
op2=json.dumps(op1)
print(op2)

