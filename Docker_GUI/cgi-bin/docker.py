#!/usr/bin/python3
import cgi
import json
import subprocess

print("content-type: text/html")
print()

f = cgi.FieldStorage()
cmd1 = f.getvalue('dstate')
cmd = "sudo systemctl {} docker".format(cmd1)
k = subprocess.getoutput(cmd)
op= "Docker Services {}ed".format(cmd1)
keys=["cmd","op"]
values=[cmd,op]
op1={keys[i]:values[i] for i in range(len(keys))}
op2=json.dumps(op1)
print(op2)
