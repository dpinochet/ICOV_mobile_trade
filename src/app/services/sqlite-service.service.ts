import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class SqliteServiceService {

  database: SQLiteObject;
  
  constructor(public http: HttpClient, private sqlite: SQLite) {
    console.log('Hello SqliteServiceProvider Provider');
  }

  get Database() {
    return this.database;
  }

  async initDB() {

    let init_db = await this.sqlite.create({
      name: 'FdGhtXfGdf_gfd_DFddfDF.db',
      location: 'default'
    })

    return init_db;

    // .then(async (db: SQLiteObject) => {
    //   this.database = db;
    //   await this.createTables();
    //   // console.log('createTable:',createTable);
    // })
  }

  async createTables(db: SQLiteObject) {
    this.database = db;

    try {


      await this.database.executeSql(
        `CREATE TABLE IF NOT EXISTS notificaciones (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          created_at TEXT,
          event TEXT,
          image TEXT,
          message TEXT,
          type TEXT,
          user_created TEXT,
          read INTEGER,
          capacitation_id INTEGER,
          incidencia_id INTEGER,
          promotion_id INTEGER,
          title TEXT
        );`, []
      )
    }
    catch (e) {

      console.log('sqlite-createTable_error: ', e);

    }
  }







  async addNotificacion(dat_insert) {


    /**
     * 
     *   `CREATE TABLE IF NOT EXISTS notificaciones (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          created_at TEXT,
          event TEXT,
          image TEXT,
          message TEXT,
          type TEXT,
          user_created TEXT,
          read INTEGER
        );`
     * 
     */


     console.log('addNotificacion: ',dat_insert);


    let data = [
      dat_insert.created_at,
      dat_insert.event,
      dat_insert.image,
      dat_insert.message,
      dat_insert.type,
      dat_insert.user_created,
      dat_insert.read,
      dat_insert.capacitation_id,
      dat_insert.incidencia_id,
      dat_insert.promotion_id
    ]



    return this.database.executeSql('INSERT INTO notificaciones (created_at, event, image, message, type, user_created, read, capacitation_id, incidencia_id, promotion_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', data);




  }


  getAllNotificacionesNoLeidos_PROMISE() {
    let query = 'SELECT * FROM notificaciones';
    return new Promise((resolve, reject) => {
      this.database.executeSql(query, []).then(data => {
        let notificaciones = [];
        let contador = 0;
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            if(data.rows.item(i).read==0){

              notificaciones.push({
                id: data.rows.item(i).id,
                created_at: data.rows.item(i).created_at,
                event: data.rows.item(i).event,
                image: data.rows.item(i).image,
                message: data.rows.item(i).message,
                type: data.rows.item(i).type,
                user_created: data.rows.item(i).user_created,
                read: data.rows.item(i).read,
                capacitation_id: data.rows.item(i).capacitation_id,
                incidencia_id: data.rows.item(i).incidencia_id,
                promotion_id: data.rows.item(i).promotion_id
              })

            }
            contador = contador + 1;
            if (contador == data.rows.length) {
              resolve(notificaciones);
            }
          }
        } else {
          resolve(notificaciones);
        }

      })

    })
  }

  buscarNotificacionCapacitationIdNoLeidos(capacitado_id) {
    return new Promise((resolve, reject) => {
      this.database.executeSql('SELECT * FROM notificaciones WHERE capacitation_id = ?', [capacitado_id]).then((data) => {


        let notificaciones = [];
        let contador = 0;
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            if (data.rows.item(i).read == 0) {
              notificaciones.push({
                id: data.rows.item(i).id,
                created_at: data.rows.item(i).created_at,
                event: data.rows.item(i).event,
                image: data.rows.item(i).image,
                message: data.rows.item(i).message,
                type: data.rows.item(i).type,
                user_created: data.rows.item(i).user_created,
                read: data.rows.item(i).read,
                capacitation_id: data.rows.item(i).capacitation_id,
                incidencia_id: data.rows.item(i).incidencia_id,
                promotion_id: data.rows.item(i).promotion_id
              })
            }
            contador = contador + 1;
            if (contador == data.rows.length) {
              resolve(notificaciones);
            }
          }
        } else {
          resolve(notificaciones);
        }



      })
    })
  }




  buscarNotificacionIncidenciaIdNoLeidos(incidencias_id) {
    return new Promise((resolve, reject) => {
      this.database.executeSql('SELECT * FROM notificaciones WHERE incidencia_id = ?', [incidencias_id]).then((data) => {


        let notificaciones = [];
        let contador = 0;
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            if (data.rows.item(i).read == 0) {
              notificaciones.push({
                id: data.rows.item(i).id,
                created_at: data.rows.item(i).created_at,
                event: data.rows.item(i).event,
                image: data.rows.item(i).image,
                message: data.rows.item(i).message,
                type: data.rows.item(i).type,
                user_created: data.rows.item(i).user_created,
                read: data.rows.item(i).read,
                capacitation_id: data.rows.item(i).capacitation_id,
                incidencia_id: data.rows.item(i).incidencia_id,
                promotion_id: data.rows.item(i).promotion_id
              })
            }
            contador = contador + 1;
            if (contador == data.rows.length) {
              resolve(notificaciones);
            }
          }
        } else {
          resolve(notificaciones);
        }



      })
    })
  }

  buscarPromocionIdNoLeidos(promotion_id) {
    return new Promise((resolve, reject) => {
      this.database.executeSql('SELECT * FROM notificaciones WHERE promotion_id = ?', [promotion_id]).then((data) => {


        let notificaciones = [];
        let contador = 0;
        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            if (data.rows.item(i).read == 0) {
              notificaciones.push({
                id: data.rows.item(i).id,
                created_at: data.rows.item(i).created_at,
                event: data.rows.item(i).event,
                image: data.rows.item(i).image,
                message: data.rows.item(i).message,
                type: data.rows.item(i).type,
                user_created: data.rows.item(i).user_created,
                read: data.rows.item(i).read,
                capacitation_id: data.rows.item(i).capacitation_id,
                incidencia_id: data.rows.item(i).incidencia_id,
                promotion_id: data.rows.item(i).promotion_id
              })
            }
            contador = contador + 1;
            if (contador == data.rows.length) {
              resolve(notificaciones);
            }
          }
        } else {
          resolve(notificaciones);
        }



      })
    })
  }

}
