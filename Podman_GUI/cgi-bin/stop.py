#!/usr/bin/python3
import cgi
import json
import subprocess

print("content-type: text/html")
print()

f = cgi.FieldStorage()
cname = f.getvalue('n')
cmd = "sudo podman stop {}".format(cname)
op = subprocess.getoutput(cmd)
keys=["cmd","op"]
values=[cmd,op]
op1={keys[i]:values[i] for i in range(len(keys))}
op2=json.dumps(op1)
print(op2)