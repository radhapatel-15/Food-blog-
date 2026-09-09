/* =========================================================
   FOODIE TALES - FOOD BLOG WEBSITE
   JavaScript
   ========================================================= */


/* =========================================================
   1. RECIPE DATABASE
   ========================================================= */

const recipes = [

    {
        id: 1,
        name: "Paneer Butter Masala",
        diet: "veg",
        meal: "dinner",
        ingredient: "paneer",
        time: "35 min",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80",
        description: "Creamy and delicious paneer cooked in a rich tomato and butter gravy.",
        ingredients: [
            "250g paneer",
            "3 tomatoes",
            "1 onion",
            "2 tbsp butter",
            "2 tbsp cream",
            "Garam masala",
            "Red chilli powder",
            "Salt"
        ],
        method: "Heat butter in a pan. Add onion and tomatoes and cook until soft. Blend into a smooth gravy. Add spices and paneer. Cook for 8-10 minutes and finish with cream."
    },


    {
        id: 2,
        name: "Vegetable Biryani",
        diet: "veg",
        meal: "lunch",
        ingredient: "rice",
        time: "45 min",
        image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=80",
        description: "Aromatic basmati rice cooked with colorful vegetables and Indian spices.",
        ingredients: [
            "2 cups basmati rice",
            "Mixed vegetables",
            "Biryani masala",
            "Yogurt",
            "Mint leaves",
            "Fried onions",
            "Salt"
        ],
        method: "Cook rice until partially done. Prepare the vegetable masala separately. Layer rice and vegetables and cook on low heat until completely done."
    },


    {
        id: 3,
        name: "Aloo Paratha",
        diet: "veg",
        meal: "breakfast",
        ingredient: "potato",
        time: "30 min",
        image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=900&q=80",
        description: "Crispy Indian flatbread stuffed with flavorful spiced potatoes.",
        ingredients: [
            "2 potatoes",
            "2 cups wheat flour",
            "Green chilli",
            "Coriander",
            "Red chilli powder",
            "Garam masala",
            "Salt"
        ],
        method: "Boil and mash potatoes. Mix with spices and coriander. Prepare dough, fill with potato mixture and roll. Cook on a hot tawa with a little oil or butter."
    },


    {
        id: 4,
        name: "Jain Vegetable Pulao",
        diet: "jain",
        meal: "lunch",
        ingredient: "vegetables",
        time: "35 min",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
        description: "A flavorful Jain-friendly rice dish prepared without onion, garlic and root vegetables.",
        ingredients: [
            "Basmati rice",
            "Capsicum",
            "Green peas",
            "Beans",
            "Coriander",
            "Jain-friendly spices",
            "Salt"
        ],
        method: "Wash and soak rice. Cook the vegetables with spices. Add rice and water and cook until the rice becomes fluffy."
    },


    {
        id: 5,
        name: "Chickpea Buddha Bowl",
        diet: "vegan",
        meal: "lunch",
        ingredient: "lentils",
        time: "25 min",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
        description: "A colorful plant-based bowl packed with chickpeas, vegetables and healthy ingredients.",
        ingredients: [
            "Cooked chickpeas",
            "Lettuce",
            "Tomatoes",
            "Cucumber",
            "Avocado",
            "Lemon",
            "Olive oil"
        ],
        method: "Prepare all vegetables. Add cooked chickpeas to a bowl. Arrange vegetables around the chickpeas and finish with lemon dressing."
    },


    {
        id: 6,
        name: "Butter Chicken",
        diet: "nonveg",
        meal: "dinner",
        ingredient: "chicken",
        time: "50 min",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80",
        description: "Tender chicken cooked in a rich, creamy and flavorful tomato gravy.",
        ingredients: [
            "500g chicken",
            "Tomatoes",
            "Butter",
            "Cream",
            "Ginger garlic paste",
            "Garam masala",
            "Red chilli powder",
            "Salt"
        ],
        method: "Marinate and cook the chicken. Prepare a tomato-based gravy with spices. Add cooked chicken and simmer. Finish with butter and cream."
    },


    {
        id: 7,
        name: "Grilled Fish",
        diet: "nonveg",
        meal: "dinner",
        ingredient: "fish",
        time: "25 min",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80",
        description: "Light and flavorful grilled fish with lemon and herbs.",
        ingredients: [
            "Fish fillet",
            "Lemon juice",
            "Garlic",
            "Mixed herbs",
            "Olive oil",
            "Black pepper",
            "Salt"
        ],
        method: "Marinate fish with lemon juice, garlic, herbs and seasoning. Grill until completely cooked and serve hot."
    },


    {
        id: 8,
        name: "Masala Omelette",
        diet: "nonveg",
        meal: "breakfast",
        ingredient: "egg",
        time: "10 min",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
        description: "Fluffy omelette loaded with vegetables, herbs and Indian spices.",
        ingredients: [
            "2 eggs",
            "Onion",
            "Tomato",
            "Green chilli",
            "Coriander",
            "Black pepper",
            "Salt"
        ],
        method: "Beat eggs and mix with chopped vegetables and spices. Pour into a hot pan and cook on both sides."
    },


    {
        id: 9,
        name: "Vegan Pasta",
        diet: "vegan",
        meal: "dinner",
        ingredient: "pasta",
        time: "25 min",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
        description: "Creamy plant-based pasta made with fresh vegetables and vegan sauce.",
        ingredients: [
            "Pasta",
            "Tomatoes",
            "Garlic",
            "Basil",
            "Cashew cream",
            "Olive oil",
            "Salt"
        ],
        method: "Cook pasta according to instructions. Prepare tomato sauce with garlic and herbs. Add pasta and cashew cream and mix well."
    },


    {
        id: 10,
        name: "Samosa",
        diet: "veg",
        meal: "snacks",
        ingredient: "potato",
        time: "40 min",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
        description: "Crispy Indian snack filled with spiced potatoes and peas.",
        ingredients: [
            "Potatoes",
            "Flour",
            "Green peas",
            "Cumin",
            "Garam masala",
            "Chilli",
            "Salt"
        ],
        method: "Prepare spiced potato filling. Make samosa dough, fill and shape the samosas. Cook until golden and crispy."
    },


    {
        id: 11,
        name: "Chicken Sandwich",
        diet: "nonveg",
        meal: "snacks",
        ingredient: "chicken",
        time: "20 min",
        image: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&w=900&q=80",
        description: "A quick and delicious chicken sandwich perfect for snacks.",
        ingredients: [
            "Cooked chicken",
            "Bread",
            "Lettuce",
            "Tomato",
            "Mayonnaise",
            "Black pepper",
            "Salt"
        ],
        method: "Prepare seasoned chicken filling. Toast bread lightly and assemble the sandwich with chicken and fresh vegetables."
    },


    {
        id: 12,
        name: "Vegan Vegetable Stir Fry",
        diet: "vegan",
        meal: "snacks",
        ingredient: "vegetables",
        time: "15 min",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",
        description: "Fast, colorful and healthy vegetable stir fry.",
        ingredients: [
            "Broccoli",
            "Carrots",
            "Bell peppers",
            "Soy sauce",
            "Sesame seeds",
            "Garlic"
        ],
        method: "Heat a pan and stir fry the vegetables on high heat. Add soy sauce and seasoning. Cook until vegetables are tender but still slightly crunchy."
    },


    {
        id: 13,
        name: "Poha",
        diet: "veg",
        meal: "breakfast",
        ingredient: "rice",
        time: "20 min",
        image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=80",
        description: "Light and flavorful Indian breakfast made with flattened rice.",
        ingredients: [
            "Poha",
            "Peanuts",
            "Green chilli",
            "Coriander",
            "Lemon",
            "Turmeric",
            "Salt"
        ],
        method: "Wash poha gently. Temper spices and peanuts in a pan. Add poha and turmeric and cook for a few minutes. Finish with lemon and coriander."
    },


    {
        id: 14,
        name: "Dal Tadka",
        diet: "jain",
        meal: "dinner",
        ingredient: "lentils",
        time: "30 min",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
        description: "Comforting lentil curry prepared in a Jain-friendly style.",
        ingredients: [
            "Toor dal",
            "Tomato",
            "Cumin",
            "Turmeric",
            "Green chilli",
            "Coriander",
            "Salt"
        ],
        method: "Pressure cook the dal. Prepare a tempering with cumin and spices. Mix into the dal and simmer before serving."
    }

];


/* =========================================================
   2. DOM ELEMENTS
   ========================================================= */

const recipeGrid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");
const dietFilter = document.getElementById("dietFilter");
const mealFilter = document.getElementById("mealFilter");
const ingredientFilter = document.getElementById("ingredientFilter");

const recipeModal = document.getElementById("recipeModal");
const creatorModal = document.getElementById("creatorModal");


/* =========================================================
   3. DIET EMOJI
   ========================================================= */

function getDietEmoji(diet) {

    switch (diet) {

        case "veg":
            return "🥗";

        case "nonveg":
            return "🍗";

        case "vegan":
            return "🌱";

        case "jain":
            return "🪷";

        default:
            return "🍴";
    }
}


/* =========================================================
   4. DIET NAME
   ========================================================= */

function getDietName(diet) {

    switch (diet) {

        case "veg":
            return "Vegetarian";

        case "nonveg":
            return "Non-Vegetarian";

        case "vegan":
            return "Vegan";

        case "jain":
            return "Jain";

        default:
            return "Recipe";
    }
}


/* =========================================================
   5. DISPLAY RECIPES
   ========================================================= */

function displayRecipes(recipeList) {

    if (!recipeGrid) {
        console.error("recipeGrid element was not found.");
        return;
    }

    recipeGrid.innerHTML = "";


    /* No recipes found */

    if (recipeList.length === 0) {

        recipeGrid.innerHTML = `
            <div style="
                grid-column: 1 / -1;
                text-align: center;
                padding: 60px 20px;
            ">
                <div style="font-size: 50px;">😔</div>

                <h3 style="margin: 15px 0;">
                    No recipes found
                </h3>

                <p>
                    Try changing your filters or search.
                </p>
            </div>
        `;

        return;
    }


    /* Create recipe cards */

    recipeList.forEach(recipe => {

        const card = document.createElement("div");

        card.className = "recipe-card";


        card.innerHTML = `
            <div class="recipe-image">

                <img
                    src="${recipe.image}"
                    alt="${recipe.name}"
                    loading="lazy"
                >

                <span class="diet-label">
                    ${getDietEmoji(recipe.diet)}
                    ${getDietName(recipe.diet)}
                </span>

            </div>


            <div class="recipe-info">

                <h3>
                    ${recipe.name}
                </h3>

                <p>
                    ${recipe.description}
                </p>


                <div class="recipe-meta">

                    <span>
                        ⏱ ${recipe.time}
                    </span>

                    <span>
                        ${capitalize(recipe.meal)}
                    </span>

                </div>


                <button
                    class="view-recipe"
                    onclick="openRecipe(${recipe.id})"
                >
                    View Recipe →
                </button>

            </div>
        `;


        recipeGrid.appendChild(card);

    });

}


/* =========================================================
   6. CAPITALIZE TEXT
   ========================================================= */

function capitalize(text) {

    if (!text) {
        return "";
    }

    return text.charAt(0).toUpperCase() + text.slice(1);
}


/* =========================================================
   7. FILTER RECIPES
   ========================================================= */

function filterRecipes() {

    const selectedDiet =
        dietFilter ? dietFilter.value : "all";

    const selectedMeal =
        mealFilter ? mealFilter.value : "all";

    const selectedIngredient =
        ingredientFilter ? ingredientFilter.value : "all";


    const filteredRecipes = recipes.filter(recipe => {

        const dietMatch =
            selectedDiet === "all" ||
            recipe.diet === selectedDiet;


        const mealMatch =
            selectedMeal === "all" ||
            recipe.meal === selectedMeal;


        const ingredientMatch =
            selectedIngredient === "all" ||
            recipe.ingredient === selectedIngredient;


        return (
            dietMatch &&
            mealMatch &&
            ingredientMatch
        );

    });


    displayRecipes(filteredRecipes);
}


/* =========================================================
   8. SEARCH RECIPES
   ========================================================= */

function searchRecipes() {

    const searchTerm =
        searchInput.value.trim().toLowerCase();


    const filteredRecipes = recipes.filter(recipe => {

        return (
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm) ||
            recipe.diet.toLowerCase().includes(searchTerm) ||
            recipe.meal.toLowerCase().includes(searchTerm) ||
            recipe.ingredient.toLowerCase().includes(searchTerm)
        );

    });


    displayRecipes(filteredRecipes);
}


/* =========================================================
   9. COMBINED SEARCH + FILTER
   ========================================================= */

function applyAllFilters() {

    const searchTerm =
        searchInput.value.trim().toLowerCase();

    const selectedDiet =
        dietFilter.value;

    const selectedMeal =
        mealFilter.value;

    const selectedIngredient =
        ingredientFilter.value;


    const filteredRecipes = recipes.filter(recipe => {

        const matchesSearch =
            searchTerm === "" ||
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm) ||
            recipe.ingredient.toLowerCase().includes(searchTerm);


        const matchesDiet =
            selectedDiet === "all" ||
            recipe.diet === selectedDiet;


        const matchesMeal =
            selectedMeal === "all" ||
            recipe.meal === selectedMeal;


        const matchesIngredient =
            selectedIngredient === "all" ||
            recipe.ingredient === selectedIngredient;


        return (
            matchesSearch &&
            matchesDiet &&
            matchesMeal &&
            matchesIngredient
        );

    });


    displayRecipes(filteredRecipes);
}


/* =========================================================
   10. DIET CATEGORY BUTTONS
   ========================================================= */

function filterDiet(diet) {

    if (dietFilter) {
        dietFilter.value = diet;
    }


    if (mealFilter) {
        mealFilter.value = "all";
    }


    if (ingredientFilter) {
        ingredientFilter.value = "all";
    }


    if (searchInput) {
        searchInput.value = "";
    }


    applyAllFilters();


    const recipesSection =
        document.getElementById("recipes");


    if (recipesSection) {

        recipesSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* =========================================================
   11. OPEN RECIPE MODAL
   ========================================================= */

function openRecipe(id) {

    const recipe =
        recipes.find(item => item.id === id);


    if (!recipe) {

        console.error("Recipe not found:", id);

        return;
    }


    const modalImage =
        document.getElementById("modalImage");

    const modalDiet =
        document.getElementById("modalDiet");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalIngredients =
        document.getElementById("modalIngredients");

    const modalMethod =
        document.getElementById("modalMethod");


    if (modalImage) {

        modalImage.src = recipe.image;
        modalImage.alt = recipe.name;

    }


    if (modalDiet) {

        modalDiet.textContent =
            `${getDietEmoji(recipe.diet)} ${getDietName(recipe.diet)}`;

    }


    if (modalTitle) {

        modalTitle.textContent =
            recipe.name;

    }


    if (modalDescription) {

        modalDescription.textContent =
            recipe.description;

    }


    if (modalMethod) {

        modalMethod.textContent =
            recipe.method;

    }


    if (modalIngredients) {

        modalIngredients.innerHTML = "";


        recipe.ingredients.forEach(ingredient => {

            const listItem =
                document.createElement("li");

            listItem.textContent =
                ingredient;

            modalIngredients.appendChild(listItem);

        });

    }


    if (recipeModal) {

        recipeModal.classList.add("active");

        document.body.style.overflow = "hidden";

    }

}


/* =========================================================
   12. CLOSE RECIPE MODAL
   ========================================================= */

function closeRecipe() {

    if (recipeModal) {

        recipeModal.classList.remove("active");

    }

    document.body.style.overflow = "";

}


/* =========================================================
   13. OPEN CREATOR FORM
   ========================================================= */

function openCreatorForm() {

    if (creatorModal) {

        creatorModal.classList.add("active");

        document.body.style.overflow = "hidden";

    }

}


/* =========================================================
   14. CLOSE CREATOR FORM
   ========================================================= */

function closeCreatorForm() {

    if (creatorModal) {

        creatorModal.classList.remove("active");

    }

    document.body.style.overflow = "";

}


/* =========================================================
   15. CREATOR RECIPE SUBMISSION
   ========================================================= */

function submitRecipe(event) {

    event.preventDefault();


    const creatorName =
        document.getElementById("creatorName").value.trim();

    const recipeName =
        document.getElementById("recipeName").value.trim();


    const diet =
        document.getElementById("creatorDiet").value;

    const meal =
        document.getElementById("creatorMeal").value;

    const ingredient =
        document.getElementById("mainIngredient").value.trim();

    const description =
        document.getElementById("recipeDescription").value.trim();

    const ingredients =
        document.getElementById("recipeIngredients").value.trim();

    const method =
        document.getElementById("recipeMethod").value.trim();


    /* Validate */

    if (
        !creatorName ||
        !recipeName ||
        !diet ||
        !meal ||
        !ingredient ||
        !description ||
        !ingredients ||
        !method
    ) {

        alert("Please fill in all fields.");

        return;
    }


    /* Create new recipe */

    const newRecipe = {

        id: Date.now(),

        name: recipeName,

        diet: diet,

        meal: meal,

        ingredient: ingredient.toLowerCase(),

        time: "User Recipe",

        image:
            "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",

        description: description,

        ingredients:
            ingredients
                .split("\n")
                .map(item => item.trim())
                .filter(item => item !== ""),

        method: method,

        creator: creatorName

    };


    /* Add recipe to database */

    recipes.unshift(newRecipe);


    /* Save creator recipe in browser */

    saveCreatorRecipe(newRecipe);


    /* Refresh recipes */

    displayRecipes(recipes);


    /* Reset form */

    event.target.reset();


    /* Close modal */

    closeCreatorForm();


    /* Success message */

    alert(
        `🎉 Thank you, ${creatorName}!\n\n` +
        `"${recipeName}" has been added to your recipe collection.`
    );

}


/* =========================================================
   16. SAVE CREATOR RECIPES TO LOCAL STORAGE
   ========================================================= */

function saveCreatorRecipe(recipe) {

    let savedRecipes =
        JSON.parse(
            localStorage.getItem("creatorRecipes")
        ) || [];


    savedRecipes.push(recipe);


    localStorage.setItem(
        "creatorRecipes",
        JSON.stringify(savedRecipes)
    );

}


/* =========================================================
   17. LOAD CREATOR RECIPES
   ========================================================= */

function loadCreatorRecipes() {

    const savedRecipes =
        JSON.parse(
            localStorage.getItem("creatorRecipes")
        ) || [];


    savedRecipes.forEach(recipe => {

        recipes.unshift(recipe);

    });

}


/* =========================================================
   18. DARK MODE
   ========================================================= */

const darkModeBtn =
    document.getElementById("darkModeBtn");


function setDarkMode(enabled) {

    if (enabled) {

        document.body.classList.add("dark");

        if (darkModeBtn) {
            darkModeBtn.textContent = "☀️";
        }

    } else {

        document.body.classList.remove("dark");

        if (darkModeBtn) {
            darkModeBtn.textContent = "🌙";
        }

    }

}


/* Check saved dark mode */

const savedDarkMode =
    localStorage.getItem("darkMode");


if (savedDarkMode === "true") {

    setDarkMode(true);

}


/* Dark mode button */

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", () => {

        const isDark =
            document.body.classList.contains("dark");


        setDarkMode(!isDark);


        localStorage.setItem(
            "darkMode",
            String(!isDark)
        );

    });

}


/* =========================================================
   19. SEARCH EVENTS
   ========================================================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        applyAllFilters
    );

}


/* =========================================================
   20. FILTER EVENTS
   ========================================================= */

if (dietFilter) {

    dietFilter.addEventListener(
        "change",
        applyAllFilters
    );

}


if (mealFilter) {

    mealFilter.addEventListener(
        "change",
        applyAllFilters
    );

}


if (ingredientFilter) {

    ingredientFilter.addEventListener(
        "change",
        applyAllFilters
    );

}


/* =========================================================
   21. CLOSE MODALS WHEN CLICKING OUTSIDE
   ========================================================= */

window.addEventListener("click", function(event) {

    if (event.target === recipeModal) {

        closeRecipe();

    }


    if (event.target === creatorModal) {

        closeCreatorForm();

    }

});


/* =========================================================
   22. ESCAPE KEY CLOSES MODALS
   ========================================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeRecipe();

        closeCreatorForm();

    }

});


/* =========================================================
   23. INITIALIZE WEBSITE
   ========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    /*
       Load recipes submitted by creators
       from previous browser sessions.
    */

    loadCreatorRecipes();


    /*
       Display all recipes when the website opens.
    */

    displayRecipes(recipes);

});