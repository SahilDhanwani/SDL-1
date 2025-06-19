<?php

session_start();

if(isset($_SESSION['username'])) {
    // header("Location: https://sahildhanwani.github.io/MyPortfolio/");
    header("Location: dashboard.php");
    exit();
}

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $set_username = "sahil";
    $set_password = "sahil";
    
    if ($username == $set_username && $password == $set_password) {
        $_SESSION['username'] = $username;
        // header("Location: https://sahildhanwani.github.io/MyPortfolio/");
        header("Location: dashboard.php");
        exit();
    } 
    else {
        $error_message = "Invalid credential";
        echo $error_message;
    }
}

if (isset($_GET['logout'])) 
{
    session_destroy();
    header("Location: login.html");
    exit();
}