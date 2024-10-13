const productSchema = require("../Models/productSchema")
const userSchema = require("../Models/userSchema")
const ApiResponse = require("../Utilities/ApiResponse")

const productadd = async (req, res) => {
    try {
        await productSchema.create(req.body);
        res.send(new ApiResponse("success", "Product added successfully"));
    } catch (error) {
        console.error(error); // Error ko console par log karna
        res.status(500).send(new ApiResponse("error", "Failed to add product")); // Error response bhejna
    }
};


const getCollection = async (req, res) => {
    try {
        const data = await productSchema.find();
        res.send(new ApiResponse("success", "Products deleted successfully", { array: data }));
    } catch (error) {
        console.error(error); // Error ko console par log karna
        res.status(500).send(new ApiResponse("error", "Failed to retrieve products")); // Error response bhejna
    }
};

const getSingleProduct = async (req, res) => {
    console.log(req.body, "Body jjjjjjjjjjjjjjj");
    try {
        const product = await productSchema.findOne({ _id: req.body.id });
        if (!product) {
            return res.status(404).send(new ApiResponse("error", "Product not found")); // Agar product nahi mila to error response bhejna
        }
        res.send(new ApiResponse("success", "Data fetched successfully", { object: product }));
    } catch (error) {
        console.error(error); // Error ko console par log karna
        res.status(500).send(new ApiResponse("error", "Failed to fetch product")); // Error response bhejna
    }
};

const updateProduct = async (req, res) => {
    try {
        const data = await productSchema.findOneAndUpdate(
            { _id: req.body.id },
            { $set: req.body.obj },
            { new: true }
        );

        if (!data) {
            return res.status(404).send(new ApiResponse("error", "Product not found")); // Agar product nahi mila to error response bhejna
        }

        res.send(new ApiResponse("success", "Product updated successfully", { object: data }));
    } catch (error) {
        console.error(error); // Error ko console par log karna
        res.status(500).send(new ApiResponse("error", "Failed to update product")); // Error response bhejna
    }
};

const dashboardDeleteProduct = async (req, res) => {
    try {
        const deletedProduct = await productSchema.findOneAndDelete({ _id: req.body._id });

        if (!deletedProduct) {
            return res.status(404).send(new ApiResponse("error", "Product not found")); // Agar product nahi mila to error response bhejna
        }

        res.send(new ApiResponse("success", "Product deleted successfully"));
    } catch (error) {
        console.error(error); // Error ko console par log karna
        res.status(500).send(new ApiResponse("error", "Failed to delete product")); // Error response bhejna
    }
};

const getAllUsers = async (req, res) => {
    try {
        const data = await userSchema.find();
        res.send(new ApiResponse("success", "Users fetched successfully", { array: data }));
    } catch (error) {
        console.error(error); // Error ko console par log karna
        res.status(500).send(new ApiResponse("error", "Failed to fetch users")); // Error response bhejna
    }
};

const deleteDashboardUser = async (req, res) => {
    try {
        console.log(req.body, "deleteDashboardUser");
        const deletedUser = await userSchema.findOneAndDelete({ _id: req.body.id });
        
        if (!deletedUser) {
            return res.status(404).send(new ApiResponse("error", "User not found"));
        }
        
        res.send(new ApiResponse("success", "User deleted successfully"));
    } catch (error) {
        console.error(error); // Error ko console par log karna
        res.status(500).send(new ApiResponse("error", "Failed to delete user")); // Error response bhejna
    }
};

module.exports={productadd,getCollection,getSingleProduct,updateProduct,dashboardDeleteProduct,getAllUsers,deleteDashboardUser}