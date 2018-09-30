Creating a React App </br>
-A Command Line tool to create React apps </br>
--Development server </br>
--Use ES6 features which are not normally supported </br>
--Keep our code  modular </br>
--Use build tools to create optomized code </br> 

</br>
Single Page Apps </br>
-React apps are typically SPA's (single page applications) </br>
-Only ever one HTML page is served to the browser </br>
-React then controls what a user sees on the page </br> 

</br>
Error: if something else is running on port 8080: </br>
lsof -i :8080 -t </br>
--This part searches for a process that is occupying port 8080 and it returns the process ID </br>
kill -9 $(lsof -i :8080 -t); </br>
--This kills the process that was running on 8080 so now it’s free to be used by your new application that you want to run  </br>

</br>
You can now view myapp in the browser. </br>

  Local:            http://localhost:8080/ </br>
  On Your Network:  http://172.17.0.74:8080/ </br>