## Latest Plane Crash Coding Challenge for Wikimedia Foundation

The goal of this small project is to achieve a photo/file uploading feature to a fictional Wikipedia page.

The Tech Stack chosen for this project is HTML, CSS, and JavaScript. The reason to use this stack is the simplicity and the convenience of the JavaScript.


## The Coding Challenge Specifications


You are building a web frontend for a mini-Wikipedia with only a single long article called 'Latest_plane_crash'.

A lot of editors following a recent plane crash are scrambling to update the page with photographs as details emerge (up to 10 uploads per second). The upload process begins with the user clicking a button labeled “Add Photo”, which spawns a drag and drop-capable file upload interface. Upon upload, the user is prompted to provide information about key attributes of the photograph (e.g. a short description, content license, location, whatever you feel may be relevant), and is then directed to pick the point of insertion within the article.

To simulate API interaction, you should perform an HTTP POST request to a fake URL (feel free to use a non-existent localhost URL or an example.com endpoint) to upload a file with all of the key attributes from the form, and an HTTP PUT request with the filename and relative location in the article once it has been chosen. Those requests will fail, but should not cause the interface to cease working.


## Future Improvements

Due the time restrictions to finish this project, some improvements still need to be done in future:

- Create a form to enter metadata for each photograph or file.
- Better UI for the entire page.
- Improve responsiveness of the page.
- Establish a stream between the client and the server to notify when new information is added.
- Improve documentation
