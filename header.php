<header <?php if(isset($headerClass)){ echo "class=".$headerClass; }?>>
  <div class="logo-container">
    <?php
      if($page != "home-page"){
        echo '<a href="./">';
      }
    ?>
    <img src="images/sweet-leaf-tea-logo.png" alt="Sweet Leaf Tea Logo">
    <?php
      if($page != "home-page"){
        echo '</a>';
      }
    ?>
  </div>
  <nav>
    <ul class="hr-list">
      <li><a href="about.php">About</a></li>
    </ul>
  </nav>
</header>
