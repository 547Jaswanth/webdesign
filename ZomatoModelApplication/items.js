let items = [
    {
        id: 1,
        img: "img1.jpg",
        name: "Dosa",
        price: 60,
        qty: 1
    },
    {
        id: 2,
        img: "img2.jpg",
        name: "Biriyani",
        price: 150,
        qty: 1
    },
    {
        id: 3,
        img: "img3.jpg",
        name: "Ponagl",
        price: 40,
        qty: 1
    },
    {
        id: 4,
        img: "img4.jpg",
        name: "Puri",
        price: 30,
        qty: 1
    },
    {
        id: 5,
        img: "img5.jpg",
        name: "Idly",
        price: 30,
        qty: 1
    },
    {
        id: 6,
        img: "img6.jpg",
        name: "Pizza",
        price: 30,
        qty: 1
    }
];

// Display food items
function displayItems(foods) {
    if (foods.length != 0) {
        let eachItem = ``;
        for (let item of foods) {
            eachItem += `<div class="col-2 md-4 sm-4">
                            <div class="card mb-5">
                                <div class="card-header">
                                    <img src="${item.img} " alt="${item.name}" class="card-img" id=${item.id}>
                                    <small class="mt-3">${item.name}</small>
                                    <marquee>😋😋😋😋</marquee>
                                </div>
                                <div class="card-body text-center">
                                    <small></small>
                                    <h6>price: ${item.price}&#8377;</h6>
                                    <span id="total">Total: ${item.price*item.qty}</span>
                                </div>
                                <div class="card-footer">
                                    <i class="fa fa-minus-square" onclick="decQty(${item.id})"></i>

                                    <span qty-${item.id}">${item.qty}</span>
                                    <i class="fa fa-plus-square" onclick="incQty(${item.id})"></i>
                                </div>
                                
                            </div>
                        </div>`;
        }
        let displaytag=document.querySelector('#display');
        displaytag.innerHTML = eachItem;

    }
}

function incQty(id) {
    items = items.map(item => {
        if (item.id === id) {
            return { ...item, qty: item.qty + 1 };
        }
        return item;
    });
    displayItems(items);
}

function decQty(id) {
    items = items.map(item => {
        if (item.id === id && item.qty > 0) {
            return { ...item, qty: item.qty - 1 };
        }
        return item;
    });
    displayItems(items);
}

displayItems(items);
