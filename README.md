# Restaurant Reviews App by Rosalyn Guerrero

## Project Overview

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

## Project Requirements

Project Rubric can be found [here](https://review.udacity.com/#!/rubrics/1090/view) and Full instructions can be found [here](https://classroom.udacity.com/nanodegrees/nd001/parts/b1808a20-5e71-4dd3-bbc1-4ae86beefd6d/modules/8341f413-0af9-434a-a8e1-b0750e2df83f/lessons/9ed091e9-db9d-4888-9737-f1ca00cfe4db/concepts/d8cdfe2d-a559-4905-b56e-fc35e2f0d17b)

### Responsive Design
1. Is the site UI compatible with a range of display sizes?
  - All content is responsive and displays on a range of display sizes.
  - Content should make use of available screen real estate and should display correctly at all screen sizes.
  - An image's associated title and text renders next to the image in all viewport sizes.

2. Are images responsive?
  - Images in the site are sized appropriate to the viewport and do not crowd or overlap other elements in the browser, regardless of viewport size.

3. Are application elements visible and usable in all viewports?
  - On the main page, restaurants and images are displayed in all viewports. The detail page includes a map, hours and reviews in all viewports.

### Accessibility
1. Are images accessible?
  - All content-related images include appropriate alternate text that clearly describes the content of the image.

2. Is focus used appropriately to allow easy navigation of the site?
  - Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus.

3. Are site elements defined semantically?
  - Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined.

### Offline Availability
1. Are pages that have been visited available offline?
  - When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access.

## Getting Started

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality. 

1. Clone the repository and install all modules by running the install

```
  git clone https://github.com/rosalyn0922/all-star-restaurant-review.git
```
```
  npm i
```

2. A live server have been installed in this project. To run it just type the following in the terminal

```
  npm run start:live
```


## Credits

Icons made by [FreePick](https://www.freepik.com) from [Flaticon](https://www.flaticon.com/) is licensed by [Creative Commons By 3.0](http://creativecommons.org/licenses/by/3.0/)