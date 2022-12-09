import React from "react";
import { MainTitle } from "../../styles/Text";
import "./BentoPage.css";

function BentoPage() {
  return (
    <div className="mainBentoContainer">
      <MainTitle>Guide To Bento Boxes</MainTitle>
      <h2>What is bento?</h2>
      <p>
        In Japanese, bento (弁当 bentō) or obento (お弁当 obentō) refers to a
        compact, nutritiously-balanced, visually appealing meal served in a box.
        We call the bento container “bento-bako” (弁当箱).
      </p>

      <div className="bentoContentContiainer">
        <p>Skip to:</p>
        <a href="#bentoTools">1. Bento boxes and tools</a> <br />
        <a href="#planMenu">2. Plan Menus</a>
        <br />
        <a href="#mealPrep">3. Meal Prep your bento</a>
        <br />
      </div>

      <div className="bentoToolsContainer chapterContainer">
        <h1 id="bentoTools">Bento boxes and tools</h1>
        <h3 className="bentoH3">1. Bento Boxes</h3>
        <div className="bentoBoxContainer">
          <img
            className="bentoImage"
            src="https://www.justonecookbook.com/wp-content/uploads/2013/09/how-to-make-bento-1536.jpg"
            alt="Various bento boxes"
          />
          <p>
            It doesn’t have to be a Japanese bento box. You will need some sort
            of container or lunch box to put your food in. I use thermal lunch
            boxes for warm food like pasta and grilled cheese sandwiches. I also
            find it convenient when an ice pack is already attached to the bento
            box lid to keep food safe (read more about food safety tips for
            bento here).
            <br />
            <br />
            <ul>
              <li>
                Food jars (after trying several jars over the years, we think
                Zojirushi jars keep the food warmer than Thermos.)
              </li>
              <li>
                BPA-Free plastic bento containers (the Bento&Co sells varieties
                and ships internationally)
              </li>
            </ul>
          </p>
        </div>
        <h3 className="bentoH3">2. Silicone Cups</h3>
        <div className="bentoBoxContainer">
          <img
            className="bentoImage"
            src="https://www.justonecookbook.com/wp-content/uploads/2021/08/How-To-Make-Bento-1576.jpg"
            alt="silicone cups"
          />
          <p>
            The silicone cups are great for keeping wet things away from dry
            foods and holding loose items like blueberries in one place.
            Usually, silicone cups come in bright and cheerful colors which
            improve the presentation of the bento. They are reusable and come in
            many different sizes and colors.
          </p>
        </div>
        <h3 className="bentoH3">3. Dividers</h3>
        <div className="bentoBoxContainer">
          {" "}
          <img
            className="bentoImage"
            src="https://www.justonecookbook.com/wp-content/uploads/2021/08/How-To-Make-Bento-1580.jpg"
            alt="dividers"
          />
          <p>
            The silicone dividers come in bright colors to improve the
            presentation for the bento and they help separate one food from the
            other without mixing up the flavors. You can also use edible
            separators such as lettuce, shiso leaves, cucumber slices, etc.
          </p>
        </div>
        <h3 className="bentoH3">4. Sauce containers</h3>
        <div className="bentoBoxContainer">
          <img
            className="bentoImage"
            src="https://www.justonecookbook.com/wp-content/uploads/2021/08/How-To-Make-Bento-1572.jpg"
            alt="sauce containers"
          />
          <p>
            The sauce containers help you store the sauce separately so that the
            food will stay dry until lunchtime. It’s not so pleasant when the
            sauce ends up getting mixed with foods it’s not meant for.
          </p>
        </div>
      </div>

      <div className="planBentoContainer chapterContainer">
        <h1 id="planMenu">Plan Bento Menus</h1>
        <p>
          First, use your creativity to visualize how a bento should look like.
          It doesn’t have to be complicated and you can start with simple dishes
          that you are familiar with.
        </p>
        <h3 className="bentoH3">Tip 1: Prepare 5 types of foods</h3>
        <div className="bentoBoxContainer">
          {" "}
          <img
            className="bentoImage"
            src="https://www.justonecookbook.com/wp-content/uploads/2021/08/How-To-Make-Bento-1782.jpg"
            alt="bento"
          />
          <ol>
            <li>
              <strong>Carb</strong> - rice, yakisoba, yaki udon, takikomi gohan
            </li>
            <li>
              <strong>Main(Protein)</strong> - Meat, fish, and seafood (karaage,
              gyoza, teriyaki salmon)
              <li>
                <strong>Sides (Vegatables)</strong> - Also, tofu, egg, or
                mushroom dishes (hijiki salad, potato salad, tamagoyaki, green
                bean gomaae, kinpira renkon)
              </li>
              <li>
                <strong>Fillers</strong> - Simple yet colorful ingredients to
                brighten the bento (blanched broccoli, cherry tomatoes, boiled
                egg)
              </li>
              <li>
                <strong>Fruits</strong> - In the bento box or in a separate
                container (berries, grapes, apples)
              </li>
            </li>
          </ol>
        </div>

        <h3 className="bentoH3">Tip 2: Keep rainbow colors in mind</h3>
        <div className="">
          <p>
            When making choices on which foods to include in the bento box,
            choose bold colors to provide visual impact. Echoing the doctors’
            advice ‘eat your colors’, colorful vegetables and fruits are often
            high in nutrients.
          </p>

          <div className="colorContainer">
            <div className="colorItem">
              {" "}
              <h4>Red</h4>
              <img
                className="bentoImage"
                src="https://www.justonecookbook.com/wp-content/uploads/2021/08/How-To-Make-Bento-1556.jpg"
                alt="red color foods"
              />
            </div>
            <div className="colorItem">
              <h4>Yellow and orange</h4>
              <img
                className="bentoImage"
                src="https://www.justonecookbook.com/wp-content/uploads/2021/08/How-To-Make-Bento-1549.jpg"
                alt="yellow and orange foods"
              />
            </div>
            <div className="colorItem">
              <h4>Green</h4>
              <img
                className="bentoImage"
                src="https://www.justonecookbook.com/wp-content/uploads/2021/08/How-To-Make-Bento-1547.jpg"
                alt="green foods"
              />
            </div>
            <div className="colorItem">
              <h4>White, black, brown</h4>
              <img
                className="bentoImage"
                src="https://www.justonecookbook.com/wp-content/uploads/2021/08/How-To-Make-Bento-1562.jpg"
                alt="white brown and black foods"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mealPrepContainer chapterContainer">
        <h1 id="mealPrep">Meal Prep your bento</h1>

        <p>
          Meal prepping can potentially save a lot of time and energy and you
          can do that with bento-making too.
        </p>
        <h3 className="bentoH3">Tip 1: Make a extra portion</h3>
        <div className="bentoBoxContainer">
          {" "}
          <img
            className="bentoImage"
            src="https://www.justonecookbook.com/wp-content/uploads/2021/08/Bento-Meal-Prep-0536-Chicken-Katsu-I.jpg"
            alt="bento"
          />
          <p>
            Double up the portions especially when making freezer-friendly
            dishes for dinner. The extras cna be reheated and packed in the
            bento the next day, or freeze for later use
          </p>
        </div>

        <h3 className="bentoH3">
          Tip 2: Stock up on bento dishes in the freezer and fridge
        </h3>
        <div className="bentoBoxContainer">
          {" "}
          <img
            className="bentoImage"
            src="https://www.justonecookbook.com/wp-content/uploads/2021/08/Bento-Meal-Prep-0506-I.jpg"
            alt="bento"
          />
          <p>
            Whenever you have leftovers, always freeze them and use them in the
            bento later. And if you have extra 5 minutes in the kitchen, blanch
            the vegetables and freeze them (like broccoli), which you can use as
            bento fillers. <br />
            If you don’t have a big freezer space, you can also use your fridge
            to store some of the meal prep-friendly dishes and leftovers.
          </p>
        </div>

        <h3 className="bentoH3">Tip 3: Plan ahead</h3>
        <div className="bentoBoxContainer">
          <img
            className="bentoImage"
            src="https://www.justonecookbook.com/wp-content/uploads/2019/02/Meal-Prepping-I.jpg"
            alt="fridge"
          />
          <p>
            For some people, “planning ahead” can be hard. However, planning
            actually helps you save time and money in the long run, and you will
            always be more prepared despite the busy schedule. Allocate 15-30
            minutes of your time during the week; figure what you have in the
            refrigerator, what you will be cooking throughout the week, and what
            you will need from the grocery stores.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BentoPage;
