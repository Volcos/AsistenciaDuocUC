import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
    providedIn: 'root',
})
export class UsuarioService {
    private apiUrl = 'http://localhost:4000';

    constructor() {}

    async guardarUsuario(usuario: any) {
        try {
            const response = await axios.post(`${this.apiUrl}/usuarios`, usuario);
            console.log('Usuario guardado:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error al guardar usuario:', error);
            throw error;
        }
    }

    async verificarCredenciales(correo: string, password: string) {
        try {
            // console.log('Datos enviados al backend:', { correo, password });
            const response = await axios.post(`${this.apiUrl}/home`, { correo, password });
            // console.log('Respuesta del servidor:', response.data);
            return response.data; // Datos del usuario si es válido
        } catch (error) {
            if (error instanceof Error) {
                // Si el error es una instancia de Error
                throw new Error(error.message);
            } else {
                // Para otros tipos de error
                throw new Error('Ocurrió un error desconocido');
            }
        }
    }

}
