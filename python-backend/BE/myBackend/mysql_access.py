import mysql.connector

# 接続情報
host = 'LAPTOP-2THKAD1T'
user = 'root'
password = 'Sinken'
database = 'testdb'

# MySQLに接続
conn = mysql.connector.connect(host=host, user=user, password=password, database=database)
cursor = conn.cursor()

# クエリの例
query = 'SELECT * FROM User;'
cursor.execute(query)

# 結果を取得
result = cursor.fetchall()

# 結果を表示
for row in result:
    print(row)

# 接続を閉じる
cursor.close()
conn.close()