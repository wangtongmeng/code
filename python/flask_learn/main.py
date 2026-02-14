from flask import Flask

app = Flask(__name__)
print(f"应用名字", app.name)
