import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'b2b-view-product',
    loadChildren: () => import('./pages/b2b-view-product/b2b-view-product.module').then( m => m.B2bViewProductPageModule)
  },
  {
    path: 'background-consumer',
    loadChildren: () => import('./pages/background-consumer/background-consumer.module').then( m => m.BackgroundConsumerPageModule)
  },
  {
    path: 'be-to-be',
    loadChildren: () => import('./pages/be-to-be/be-to-be.module').then( m => m.BeToBePageModule)
  },
  {
    path: 'capacitacion',
    loadChildren: () => import('./pages/capacitacion/capacitacion.module').then( m => m.CapacitacionPageModule)
  },
  {
    path: 'compose-tweet',
    loadChildren: () => import('./pages/compose-tweet/compose-tweet.module').then( m => m.ComposeTweetPageModule)
  },
  {
    path: 'concessions',
    loadChildren: () => import('./pages/concessions/concessions.module').then( m => m.ConcessionsPageModule)
  },
  {
    path: 'connect-socket',
    loadChildren: () => import('./pages/connect-socket/connect-socket.module').then( m => m.ConnectSocketPageModule)
  },
  {
    path: 'delivery-chip',
    loadChildren: () => import('./pages/delivery-chip/delivery-chip.module').then( m => m.DeliveryChipPageModule)
  },
  {
    path: 'delivery-publish',
    loadChildren: () => import('./pages/delivery-publish/delivery-publish.module').then( m => m.DeliveryPublishPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'img-modal',
    loadChildren: () => import('./pages/img-modal/img-modal.module').then( m => m.ImgModalPageModule)
  },
  {
    path: 'incidencias',
    loadChildren: () => import('./pages/incidencias/incidencias.module').then( m => m.IncidenciasPageModule)
  },
  {
    path: 'incidents',
    loadChildren: () => import('./pages/incidents/incidents.module').then( m => m.IncidentsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'manage-document',
    loadChildren: () => import('./pages/manage-document/manage-document.module').then( m => m.ManageDocumentPageModule)
  },
 
  {
    path: 'metas',
    loadChildren: () => import('./pages/metas/metas.module').then( m => m.MetasPageModule)
  },
  {
    path: 'modal-img-preview',
    loadChildren: () => import('./pages/modal-img-preview/modal-img-preview.module').then( m => m.ModalImgPreviewPageModule)
  },
  {
    path: 'play-list-youtube',
    loadChildren: () => import('./pages/play-list-youtube/play-list-youtube.module').then( m => m.PlayListYoutubePageModule)
  },
  {
    path: 'polls',
    loadChildren: () => import('./pages/polls/polls.module').then( m => m.PollsPageModule)
  },
  {
    path: 'pop-over-menu-be2-be',
    loadChildren: () => import('./pages/pop-over-menu-be2-be/pop-over-menu-be2-be.module').then( m => m.PopOverMenuBe2BePageModule)
  },
  {
    path: 'pop-over-notificaciones',
    loadChildren: () => import('./pages/pop-over-notificaciones/pop-over-notificaciones.module').then( m => m.PopOverNotificacionesPageModule)
  },
  {
    path: 'promociones',
    loadChildren: () => import('./pages/promociones/promociones.module').then( m => m.PromocionesPageModule)
  },
  {
    path: 'public-view-facebook',
    loadChildren: () => import('./pages/public-view-facebook/public-view-facebook.module').then( m => m.PublicViewFacebookPageModule)
  },
  {
    path: 'public-view-instagram',
    loadChildren: () => import('./pages/public-view-instagram/public-view-instagram.module').then( m => m.PublicViewInstagramPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./pages/report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'stores',
    loadChildren: () => import('./pages/stores/stores.module').then( m => m.StoresPageModule)
  },
  {
    path: 'test-view-model',
    loadChildren: () => import('./pages/test-view-model/test-view-model.module').then( m => m.TestViewModelPageModule)
  },
  {
    path: 'timeline',
    loadChildren: () => import('./pages/timeline/timeline.module').then( m => m.TimelinePageModule)
  },
  {
    path: 'trainings',
    loadChildren: () => import('./pages/trainings/trainings.module').then( m => m.TrainingsPageModule)
  },
  {
    path: 'upload-youtube',
    loadChildren: () => import('./pages/upload-youtube/upload-youtube.module').then( m => m.UploadYoutubePageModule)
  },
  {
    path: 'visits',
    loadChildren: () => import('./pages/visits/visits.module').then( m => m.VisitsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
