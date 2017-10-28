<?php
/*
Plugin Name: Save with keyboard
Plugin URI: http://wordpress.org/extend/plugins/save-with-keyboard
Description: This plugin lets you save your posts, pages, theme and plugin files in the most natural way: pressing Ctrl+S (or Cmd+S on Mac).
Author: Mattia Trapani (zupolgec), Ron Valstar (sjeiti)
Author URI: https://wordpress.org/plugins/save-with-keyboard/
Version: 2.3
License: WTFPL (http://sam.zoy.org/wtfpl)
*/

if (is_admin() && ! function_exists('save_with_keyboard_enqueue')) {
	function save_with_keyboard_enqueue() {
		wp_enqueue_script('swk_js', plugin_dir_url(__FILE__) . 'saveWithKeyboard' . (WP_DEBUG ? '' : '.min') . '.js', array('jquery'), '2.3');
	}

	add_action('admin_enqueue_scripts', 'save_with_keyboard_enqueue');
}
