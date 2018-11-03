<?php
/**
 * Plugin Name: Save with keyboard
 * Plugin URI: https://wordpress.org/plugins/save-with-keyboard/
 * Description: This plugin lets you save your posts, pages, theme and plugin files in the most natural way: pressing Ctrl+S (or Cmd+S on Mac).
 * Version: 3.0.2
 * Author: Mattia Trapani (zupolgec), Ron Valstar (sjeiti)
 * License: WTFPL
 * License URI: http://www.wtfpl.net/
 * Text Domain: save-with-keyboard
 * Domain Path: /languages
 */

function save_with_keyboard_load_plugin_textdomain() {
    load_plugin_textdomain('save-with-keyboard', false, basename( dirname( __FILE__ ) ) . '/languages/');
}
add_action('plugins_loaded', 'save_with_keyboard_load_plugin_textdomain');

if (is_admin() && ! function_exists('save_with_keyboard_enqueue')) {
    function save_with_keyboard_enqueue() {
        // Register the script
        wp_register_script('swk_js', plugin_dir_url(__FILE__) . 'saveWithKeyboard' . (WP_DEBUG ? '' : '.min') . '.js', array('jquery'), '3.0.2');

        // Localize the script with new data
        $translationArray = array(
            'tooltipText' => __( 'Press $SHORTCUT$ to click', 'save-with-keyboard' )
        );
        wp_localize_script('swk_js', 'SaveWithKeyboard', $translationArray);

        // Enqueued script with localized data.
        wp_enqueue_script('swk_js');
    }

    add_action('admin_enqueue_scripts', 'save_with_keyboard_enqueue');
}
