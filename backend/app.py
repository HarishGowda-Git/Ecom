from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/assets/<path:filename>')
def assets_provider(filename):
    return send_from_directory('assets', filename)
@app.route('/itemslist')
def item_list():
    items = [
        {
            "id": 1,
            "cat": "men",
            "name": "item1",
            "price": 100,
            "image": "/assets/products/item1.png"
        },
        {
            "id": 2,
            "cat": "men",
            "name": "item2",
            "price": 250,
            "image": "/assets/products/item2.png"
        },
        {
            "id": 3,
            "cat": "kids",
            "name": "item3",
            "price": 50,
            "image": "/assets/products/item3.png"
        },
        {
            "id": 4,
            "cat": "women",
            "name": "item4",
            "price": 100,
            "image": "/assets/products/item1.png"
        },
        {
            "id": 5,
            "cat": "winter",
            "name": "item5",
            "price": 2500,
            "image": "/assets/products/item2.png"
        },
        {
            "id": 6,
            "cat": "summer",
            "name": "item6",
            "price": 150,
            "image": "/assets/products/item3.png"
        },
        {
            "id": 7,
            "cat": "kids",
            "name": "item7",
            "price": 350,
            "image": "/assets/products/item3.png"
        }
    ]
    
    # Get the category from the query parameters
    category = request.args.get('category')

    if category:
        # Filter items based on category
        filtered_items = [item for item in items if item["cat"] == category.lower()]
        return jsonify(filtered_items)
    
    # If no category is passed, return all items
    return jsonify(items)

@app.route('/', methods=['GET'])
def home():
    data = {
        'name': 'harish',
        'age': 25
    }
    return jsonify(data), 200 

if __name__ == '__main__':
    app.run(debug=True)