from flask import Flask, render_template

app = Flask(__name__)

@app.route("/ETS")
def home():
    return render_template("index.html")

@app.route("/listharga")
def listharga():
    return render_template("listharga.html")

if __name__ == "__main__":
    app.run(debug=True)