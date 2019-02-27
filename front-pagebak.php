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
            $pages = get_pages(array('sort_column' => 'menu_order')); 
            foreach ($pages as $page_data) {

                $content = apply_filters('the_content', $page_data->post_content); 
                $title = $page_data->post_title;
                $name = $page_data->post_name;


                echo "<div class=", $name, ">";
                echo "<h1 class=\"page-title\">", $title, "</h1>" ;
                echo $content,  "</div>"; 
                
            }
		?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
//get_sidebar();
get_footer();
?>
</div>