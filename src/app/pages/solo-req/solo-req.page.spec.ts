import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoloReqPage } from './solo-req.page';

describe('SoloReqPage', () => {
  let component: SoloReqPage;
  let fixture: ComponentFixture<SoloReqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloReqPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoloReqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
