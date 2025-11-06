<?php include("db.php"); ?>

<!DOCTYPE html>
<html>
<head>
  <title>Simple Student CRUD</title>
</head>
<body>
  <h2>Student Management (Add / View / Delete)</h2>

  <!-- Add Student Form -->
  <form method="POST">
    Name: <input type="text" name="name" required><br><br>
    Email: <input type="email" name="email" required><br><br>
    Course: <input type="text" name="course" required><br><br>
    <input type="submit" name="submit" value="Add Student">
  </form>

  <hr>

  <!-- Display All Students -->
  <h3>All Students</h3>
  <table border="1" cellpadding="8">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Course</th>
      <th>Action</th>
    </tr>

    <?php
    // Insert new student
    if (isset($_POST['submit'])) {
      $name = $_POST['name'];
      $email = $_POST['email'];
      $course = $_POST['course'];

      $query = "INSERT INTO students (name, email, course) VALUES ('$name', '$email', '$course')";
      mysqli_query($conn, $query);
      echo "<script>alert('Student Added Successfully!'); window.location='index.php';</script>";
    }

    // Delete student
    if (isset($_GET['delete'])) {
      $id = $_GET['delete'];
      mysqli_query($conn, "DELETE FROM students WHERE id=$id");
      echo "<script>alert('Student Deleted!'); window.location='index.php';</script>";
    }

    // Fetch all students
    $result = mysqli_query($conn, "SELECT * FROM students");
    while ($row = mysqli_fetch_assoc($result)) {
      echo "<tr>
              <td>{$row['id']}</td>
              <td>{$row['name']}</td>
              <td>{$row['email']}</td>
              <td>{$row['course']}</td>
              <td><a href='?delete={$row['id']}'>Delete</a></td>
            </tr>";
    }
    ?>
  </table>
</body>
</html>
