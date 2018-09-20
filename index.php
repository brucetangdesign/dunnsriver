<!doctype html>

<?php
//Page title
$pageTitle = "Sweet leaf Tea";
$headerClass="fixed";
$footerClass="fixed";
$page = "home-page";
?>

<html lang="en">
  <head>
    <?php include 'head.php'; ?>
  </head>

  <body id="<?php echo $page; ?>">
    <?php include 'header.php'; ?>
    <!-- Backgrounds -->
    <section id="bg" class="bg1">
      <div class="bg-gradient1">
        <div class="honeycomb"></div>
        <div class="honeycomb reverse"></div>
      </div>
      <div class="bg-gradient2 hidden">
      </div>
      <div class="bg-gradient3 hidden"></div>
      <div class="bg-gradient4 hidden">
        <div class="austin-bg"></div>
      </div>
    </section>

    <!-- Main Slides -->
    <section class="slide-main slide1">
      <div class="bg-graphics rellax" data-rellax-speed="5"></div>
      <div class="slide-image-container" data-rellax-speed="3">
        <div class="slide-image"></div>
      </div>
      <div class="slide-copy" data-rellax-speed="-2">
        <h3>Sweet Leaf Is</h3>
        <h1>Sweet...but<br>not too sweet.</h1>
      </div>
    </section>

    <section class="slide-main slide2">
      <div class="bg-graphics rellax" data-rellax-speed="5"></div>
      <div class="organic-stamp rellax" data-rellax-speed="1"></div>
      <div class="slide-image-container" data-rellax-speed="3">
        <div class="slide-image"></div>
        <div class="slide-image glow"></div>
      </div>
      <div class="slide-copy rellax" data-rellax-speed="-2">
        <h1>Copy about organics and ingredients to go here.</h1>
        <a class="button" href="#">Learn More</a>
      </div>
    </section>

    <section class="slide-main slide3">
      <div class="bg-graphics rellax" data-rellax-speed="5"></div>
      <div class="bottle-cap rellax" data-rellax-speed="1"></div>
      <div class="texas-stamp rellax" data-rellax-speed="2"></div>
      <div class="est-1998 rellax" data-rellax-speed="5.4"></div>
      <div class="cactus rellax" data-rellax-speed="-1"></div>
      <div class="cactus reverse"></div>
      <div class="slide-image-container" data-rellax-speed="1">
        <div class="slide-image"></div>
        <div class="slide-image glow"></div>
      </div>
      <div class="slide-copy rellax" data-rellax-speed="-2">
        <h1>Copy about less sugar and great taste.</h1>
        <a class="button" href="#">Our Story</a>
      </div>
    </section>


    <section id="about-products" class="slide-main slide4">
      <div class="about-products-main">
        <h1>Our famous recipe,<br>just for you!</h1>
        <a class="button" href="about.php">Tell Me More</a>
        <img src="images/home-products-main.png">
      </div>
      <div class="about-products-subs">
        <div class="about-product-content">
          <div class="slide-image-container core">
            <div class="slide-image"></div>
          </div>
          <div class="slide-copy rellax">
            <h2>Core Teas</h2>
            <ul>
              <li>Cut Sugar and Calories by 25%</li>
              <li>50 Calories per serving</li>
            </ul>
          </div>
        </div>
        <div class="about-product-content">
          <div class="slide-image-container semisweet">
            <div class="slide-image"></div>
          </div>
          <div class="slide-copy rellax">
            <h2>Semisweet Teas</h2>
            <ul>
              <li>Under 10 grams of Sugar</li>
              <li>50 calories per serving</li>
            </ul>
          </div>
        </div>
        <div class="about-product-content last-content">
          <div class="slide-image-container unsweet">
            <div class="slide-image"></div>
          </div>
          <div class="slide-copy rellax">
            <h2>Unsweet Teas</h2>
            <ul>
              <li>ZERO SUGAR</li>
              <li>5 Calories per serving</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <?php include 'down-arrow.php'; ?>
    <?php include 'footer.php'; ?>
  </body>
</html>
