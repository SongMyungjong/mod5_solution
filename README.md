# mod5_solution

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// TODO: STEP 0: Look over the code from
// *** start ***
// to
// *** finish ***
// below.
// We changed this code to retrieve all categories from the server instead of
// simply requesting home HTML snippet. We now also have another function
// called buildAndShowHomeHTML that will receive all the categories from the server
// and process them: choose random category, retrieve home HTML snippet, insert that
// random category into the home HTML snippet, and then insert that snippet into our
// main page (index.html).
//
// TODO: STEP 1: Substitute [...] below with the *value* of the function buildAndShowHomeHTML,
// so it can be called when server responds with the categories data.

// *** start ***
// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  allCategoriesUrl, // original
  function (responseText) {
    document.querySelector("#main-content")
        .innerHTML = responseText;
  },
   // ***** <---- TODO: STEP 1: Substitute [...] ******
  true); // Explicitely setting the flag to get JSON from server processed into an object literal
});
// *** finish **

// *** start ***
// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  allCategoriesUrl, 
  buildAndShowHomeHTML, // ***** <---- TODO: STEP 1: Substitute [...] ******
  true); // Explicitely setting the flag to get JSON from server processed into an object literal
});
// *** finish **

// *** start ***
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  allCategoriesUrl,
  function(buildAndShowCategoriesHTML) { document.querySelector("#main-content").innerHTML = responseText;
                                                                                                                 },  // ***** <---- TODO: STEP 1: Substitute [...] ******
  true); // Explicitely setting the flag to get JSON from server processed into an object literal
});
// *** finish **


// Builds HTML for the home page based on categories array
// returned from the server.
function buildAndShowHomeHTML (categories) {

  // Load home snippet page
  $ajaxUtils.sendGetRequest(
    homeHtmlUrl,
    function (homeHtml) { // original

      // TODO: STEP 2: Here, call chooseRandomCategory, passing it retrieved 'categories'
      // Pay attention to what type of data that function returns vs what the chosenCategoryShortName
      // variable's name implies it expects.
      // var chosenCategoryShortName = ....
        var chosenCategoryShortName = chooseRandomCategory(categories) // JSON.parse()

      // TODO: STEP 3: Substitute {{randomCategoryShortName}} in the home html snippet with the
      // chosen category from STEP 2. Use existing insertProperty function for that purpose.
      // Look through this code for an example of how to do use the insertProperty function.
      // WARNING! You are inserting something that will have to result in a valid Javascript
      // syntax because the substitution of {{randomCategoryShortName}} becomes an argument
      // being passed into the $dc.loadMenuItems function. Think about what that argument needs
      // to look like. For example, a valid call would look something like this:
      // $dc.loadMenuItems('L')
      // Hint: you need to surround the chosen category short name with something before inserting
      // it into the home html snippet.
      //
      // var homeHtmlToInsertIntoMainPage = ....
      //  var homeHtmlToInsertIntoMainPage =
      //    buildCategoriesViewHtml(chosenCategoryShortName,
      //                            homeHtmlUrl
      //                            homeHtml);
        var homeHtmlToInsertIntoMainPage = insertProperty(homeHtml, "randomCategoryShortName", "'" + chosenCategoryShortName.short_name + "'");
      // TODO: STEP 4: Insert the the produced HTML in STEP 3 into the main page
      // Use the existing insertHtml function for that purpose. Look through this code for an example
      // of how to do that.
      // ....
        insertHtml("#main-content", homeHtmlToInsertIntoMainPage);
    },
    false); // False here because we are getting just regular HTML from the server, so no need to process JSON.
}
