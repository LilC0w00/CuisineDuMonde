<?php
session_start();
session_destroy(); // On détruit la session
header("Location: admin-login.html"); // Redirection vers la page login
exit;
