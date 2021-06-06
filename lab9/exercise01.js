const shoppingCart = (function () {
    let basket = [];
    return {

        upsertItem: function (product) {
            for (let item of basket) {
                if (item.id === product.id) {
                    return;
                }
            }
            basket.push(product);
        },

        getItemCount: function () {
            return basket.length;
        },

        getTotalPrice: function () {
            let totalCost = basket.reduce((sum, item) => sum + item.price * item.count, 0);
            return totalCost;
        },
        removeItemById: function (id) {
            return basket.filter(item => !item.id === id);
        },

        addProduct: function (id, name, description, price, count) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.price = price;
            this.count = count;
        },
    }
})();

