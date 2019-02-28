<div class="content">
<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package hardroad1
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

    <?php
    /*
        $hardroadgraphics = new WP_Query(  array( 'pagename' => 'hardroad-graphics' )  );
        $hardroadgraphics->the_post();
        $name=get_post()->post_name;
        echo "<div class=\"page \" id=\"", $name, "\">";
        echo "<h1 class=\"page-title\">", the_title(), "</h1>" ;
        the_content();
        echo '</div>';
        wp_reset_postdata();
    */
        $featuredproducts = new WP_Query(  array( 'pagename' => 'featured-products' )  );
        $featuredproducts->the_post();
        $name=get_post()->post_name;
        echo "<div class=\"page \" id=\"", $name, "\">";
        echo "<h1 class=\"page-title\">", the_title(), "</h1>" ;
        echo "<div class=product_gallery>";
        the_content();
        echo "</div>";
        echo '</div>';
        wp_reset_postdata();

        $contactus = new WP_Query(  array( 'pagename' => 'contact-us' )  );
        $contactus->the_post();
        $name=get_post()->post_name;
        echo "<div class=\"page \" id=\"", $name, "\">";
        echo "<h1 class=\"page-title\">", the_title(), "</h1>" ;
        the_content();
        echo '</div>';
        wp_reset_postdata();
        
        $aboutus = new WP_Query(  array( 'pagename' => 'about-us' )  );
        $aboutus->the_post();
        $name=get_post()->post_name;
        echo "<div class=\"page \" id=\"", $name, "\">";
        echo "<h1 class=\"page-title\">", the_title(), "</h1>" ;
        the_content();
        echo '</div>';
        wp_reset_postdata();
    ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
//get_sidebar();
get_footer();
?>
</div>