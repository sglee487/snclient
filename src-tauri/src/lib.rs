// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

use std::process::Command;

#[tauri::command]
fn open_in_default_browser(url: &str) {
    if cfg!(target_os = "windows") {
        Command::new("cmd")
            .args(&["/C", "start", url])
            .spawn()
            .expect("failed to open default browser");
    } else if cfg!(target_os = "macos") {
        Command::new("open")
            .arg(url)
            .spawn()
            .expect("failed to open default browser");
    } else if cfg!(target_os = "linux") {
        Command::new("xdg-open")
            .arg(url)
            .spawn()
            .expect("failed to open default browser");
    } else {
        eprintln!("Unsupported OS");
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet, open_in_default_browser])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
