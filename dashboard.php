<?php

session_start();

if (!isset($_SESSION['username']))
{
    header("Location: login.html");
    exit();
}

if (isset($_GET['logout'])) 
{
    session_destroy();
    header("Location: login.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
</head>
<body>
    <h2>Welcome to the Dashboard</h2>
    
    <p>You are logged in. <a href="?logout">Logout</a></p>
</body>
</html>