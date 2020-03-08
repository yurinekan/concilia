import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReconcilePage } from './reconcile.page';

describe('ReconcilePage', () => {
  let component: ReconcilePage;
  let fixture: ComponentFixture<ReconcilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconcilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReconcilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
