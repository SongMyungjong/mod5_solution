// *** start ***
// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  allCategoriesUrl,
  buildAndShowHomeHTML, // ***** <---- TODO: STEP 1: Substitute [...] ******
  true); // Explicitely setting the flag to get JSON from server processed into an object literal
});
// *** finish **

// Builds HTML for the home page based on categories array
// returned from the server.
function buildAndShowHomeHTML (categories) {

  $ajaxUtils.sendGetRequest(
   homeHtmlUrl,
   function (homeHtml) {
      // TODO: STEP 2: Here, call chooseRandomCategory, passing it retrieved 'categories'
      var chosenCategoryShortName = chooseRandomCategory(categories).short_name;

      // TODO: STEP 3: Substitute {{randomCategoryShortName}} in the home html snippet with the
      // chosen category from STEP 2. Use existing insertProperty function for that purpose.
      chosenCategoryShortName = "'" + chosenCategoryShortName + "'";
      var homeHtmlToInsertIntoMainPage = insertProperty(homeHtml, "randomCategoryShortName", chosenCategoryShortName);


      // TODO: STEP 4: Insert the the produced HTML in STEP 3 into the main page
      insertHtml("#main-content", homeHtmlToInsertIntoMainPage);

    },
    false); // False here because we are getting just regular HTML from the server, so no need to process JSON.
}
