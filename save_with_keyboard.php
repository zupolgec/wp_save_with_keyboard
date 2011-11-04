<?php
/*
Plugin Name: Save with keyboard
Plugin URI: http://wordpress.org/extend/plugins/save-with-keyboard
Description: This plugin lets you save your posts and pages in the most natural way: pressing Ctrl+s (or Cmd+s on Mac).
Author: Mattia Trapani (zupolgec)
Version: 1.0
License: WTFPL (http://sam.zoy.org/wtfpl)
Twitter: @zupolgec
*/

/*
 * Detects Ctrl+s and Cmd+s then saves the page/post (as draft if unpublished).
 */

function swk_enqueue_script($hook) {
    if( ! in_array($hook, array('post.php', 'post-new.php')) )
        return false;
	
    wp_enqueue_script( 'jwerty', plugins_url('/jwerty.min.js', __FILE__) );
	add_action( 'admin_head', 'swk_add_script' );
}
add_action( 'admin_enqueue_scripts', 'swk_enqueue_script' );

function swk_add_script() { ?>
	<script>
		jwerty.key('ctrl+s/cmd+s', function() {
			( jQuery('#save-post').length != 0 ) ? jQuery('#save-post').click() : jQuery('#publish').click();
			return false;
		});
	</script>
<?php
}