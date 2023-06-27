from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mysqldb import MySQL


app = Flask(__name__) 
app.secret_key = 'your_secret_key'

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Exam@170501'
app.config['MYSQL_DB'] = 'LOGIN1'

mysql = MySQL(app)

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    cursor = mysql.connection.cursor()

    cursor.execute('SELECT * FROM users WHERE username = %s AND password = %s', (username, password))
    user = cursor.fetchone()

    cursor.close()

    if user:
        flash('Logged in successfully!', 'success')
        return redirect(url_for('dashboard'))
    else:
        flash('Invalid credentials!', 'error')
        return redirect(url_for('index'))

@app.route('/dashboard')
def dashboard():
    
    collection_data = [
        {
            'product_type': 'Laptop batteries',
            'contact_incharge': 'Bhuvanesh - 2874391',
            'stock': 3,
            'price': 1000,
            'location': '123 Main Rajajinagar',
            'collector_status': 'Scheduled'
        },
        {
            'product_type': 'Hard drives and USB flash drives',
            'contact_incharge': 'Dileep - 8732482374',
            'stock': 2,
            'price': 1500,
            'location': '456 Indiranagar',
            'collector_status': 'Scheduled'
        },
        {
            'product_type': 'Printers and copiers',
            'contact_incharge': 'Neelamma - 287428943',
            'stock': 4,
            'price': 2000,
            'location': '178 Ashoknagar',
            'collector_status':'Scheduled'
        },
        {
              'product_type': 'Chargers and adapters',
            'contact_incharge': 'Spoorthy - 8742983232',
            'stock': 6,
            'price': 2500,
            'location': '711 Jayanagar',
            'collector_status':'Scheduled'
        },
          {
              'product_type': 'Old computer connectors',
            'contact_incharge': 'Suman - 8938429349',
            'stock': 7,
            'price': 3000,
            'location': '321 Vilasnagar',
            'collector_status':'Scheduled'
        },
     
    ]
    return render_template('dashboard.html', collection_data=collection_data)


@app.route('/logout')
def logout():
    
    return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)
