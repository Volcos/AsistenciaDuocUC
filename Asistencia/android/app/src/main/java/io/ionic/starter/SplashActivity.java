package io.ionic.starter;

import android.content.Intent;
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;

public class SplashActivity extends AppCompatActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Cargar el layout del splashscreen (opcional)
    setContentView(R.layout.splashscreen);

    // Redirigir a la actividad principal después de unos segundos
    new android.os.Handler().postDelayed(() -> {
      Intent intent = new Intent(SplashActivity.this, MainActivity.class);
      startActivity(intent);
      finish();
    }, 3000); // 3 segundos de espera
  }
}
